<?php

namespace Pim\Component\Connector\Writer\File\Xlsx;

use Akeneo\Component\Batch\Item\FlushableInterface;
use Akeneo\Component\Batch\Item\InitializableInterface;
use Akeneo\Component\Batch\Item\ItemWriterInterface;
use Akeneo\Component\Batch\Step\StepExecutionAwareInterface;
use Pim\Component\Connector\Writer\File\AbstractItemMediaWriter;
use Pim\Component\Connector\Writer\File\ArchivableWriterInterface;

/**
 * XLSX VariantGroup writer
 *
 * @author    Willy Mesnage <willy.mesnage@akeneo.com>
 * @copyright 2016 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
class VariantGroupWriter extends AbstractItemMediaWriter implements
    ItemWriterInterface,
    InitializableInterface,
    FlushableInterface,
    StepExecutionAwareInterface,
    ArchivableWriterInterface
{
    /**
     * {@inheritdoc}
     */
    protected function getWriterConfiguration()
    {
        return ['type' => 'xlsx'];
    }

    /**
     * {@inheritdoc}
     */
    protected function getItemIdentifier(array $variantGroup)
    {
        return $variantGroup['code'];
    }
}
